"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { set, useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { searchSchema } from "@/lib/revalidation/searchSchema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
interface FeedItem {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  media_type: string;
  permalink: string;

}

export default function Searchsection() {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: { search: "" }
  });

  const [dataFilter, setDataFilter] = useState<FeedItem[]>([]);
  const [getDATA, setgetDATA] = useState<FeedItem[]>([]);
  const [keyword, setKeyword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const dataRef = useRef(null);

  const getdata = async () => {
    const InstagramUrl=`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_USER_TOKEN}`
    const response = await axios.get(InstagramUrl);
    setgetDATA(response.data.data);
    dataRef.current = response.data;
  };

  useEffect(() => {
    getdata();
  }, []);


  const onSubmit = (data: any) => {
    const newKeyword = data.search;
    setKeyword(newKeyword);

    const filtered = getDATA.filter(
      (item) =>
        typeof item.caption === "string" &&
        item.caption.toLowerCase().includes(newKeyword.toLowerCase())
    );
    if (filtered.length > 0) {
      setDataFilter(filtered);
      console.log(filtered, 'filtered non null');
      setIsEmpty(false);
    }
    else {
      setIsEmpty(true);
    }

  };

  return (
    <div className="w-5/6 flex flex-col justify-start items-center gap-3  p-24">
      <div>


        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="inline-flex gap-3 items-center"
          >
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Search</FormLabel>
                  <FormControl>
                    <Input placeholder="Search for posts" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter a keyword to start a search of posts
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>

      </div>


      <div className="  grid grid-cols-3 gap-4  shadow-xl " >
        {

          isEmpty ? <p>no corresponding data</p> :
            dataFilter.map((data, index) => (
              <Link href={data.permalink} key={index} className="border border-border rounded-md  p-4 ">
                <ul className="flex flex-col justify-center items-center gap-4" >
                  <li>
                    <Image className=""
                      src={data.media_url}
                      alt={data.caption}
                      width={200}
                      height={200}
                    />
                  </li>
                  <li>
                    <p>{data.caption}</p>

                  </li>
                  <li>
                    <p>{data.timestamp}</p>

                  </li>
                  <li className="inline-flex justify-start w-full" >
                    <Badge>{data.media_type}</Badge>
                  </li>
                </ul>
              </Link>
            ))}
      </div>
    </div>
  );
}
