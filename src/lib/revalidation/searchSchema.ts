import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const searchSchema = z.object({
    search: z.string().nonempty({ message: "Search is required" }),
    

    });

export const searchform = zodResolver(searchSchema);

