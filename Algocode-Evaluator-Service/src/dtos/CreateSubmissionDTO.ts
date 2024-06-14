import { z } from "zod";

// pure ts approch-1
// export interface CreateSubmissionDTO {
//   userId: string;
//   problemId: string;
//   code: string;
//   language: string;
// }

// use for the req,body format
export type CreateSubmissionDTO = z.infer<typeof createSubmissionZodSchema>;

//adding payload validation using zod , is pretty easy
export const createSubmissionZodSchema = z
  .object({
    userId: z.string(),
    problemId: z.string(),
    code: z.string(),
    language: z.string(),
  })
  .strict();
