import sampleQueue from "../queues/sampleQueue";

//info: this function add a payload into the samplequeue.
export default async function (name: string, payload: Record<string, unknown>) {
  await sampleQueue.add(name, payload);
  console.log("Successfully added a new job");
}
