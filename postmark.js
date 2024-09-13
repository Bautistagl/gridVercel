import * as postmark from "postmark";

const serverToken = "dfef03b8-c50c-437d-b67b-d9bbbd397eac";
const client = new postmark.ServerClient(serverToken);

export { client };
