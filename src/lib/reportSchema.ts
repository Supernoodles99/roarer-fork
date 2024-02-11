import { z } from "zod";
import { profileSchema } from "./profileSchema";

export const reportSchema = z.object({
  _id: z.string(),
  comment: z.string(),
  content: z
    .object({
      _id: z.string(),
      isDeleted: z.boolean(),
      u: z.string(),
    })
    .or(profileSchema)
    .nullable(),
  content_id: z.string(),
  reason: z.string(),
  status: z
    .literal("action_taken")
    .or(z.literal("no_action_taken"))
    .or(z.literal("pending")),
  time: z.number(),
  type: z.string(),
});
export type APIReport = z.infer<typeof reportSchema>;
