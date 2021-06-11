import { createServer, Model, Response } from "miragejs";

export interface Application {
  email: string;
  message?: string;
  motivation?: "low" | "high";
}

const makeServer = () =>
  createServer({
    models: {
      application: Model.extend<Partial<Application>>({})
    },

    routes() {
      this.namespace = "api";

      this.get("/applications");

      this.post(
        "/applications",
        (schema, request) => {
          const { email, message, motivation, ...rest } = JSON.parse(
            request.requestBody
          );
          if (!email) {
            return new Response(422, {}, { errors: ["Missing params"] });
          }
          if (
            !!rest &&
            Object.keys(rest).length > 0 &&
            rest.constructor === Object
          ) {
            return new Response(422, {}, { errors: ["Too many params"] });
          }
          // @ts-ignore
          const existingApplication = schema.applications.findBy({ email });
          console.log(existingApplication);
          if (!!existingApplication) {
            return new Response(409, {}, { errors: ["Duplicate"] });
          }
          // @ts-ignore
          return schema.applications.create({ email, message, motivation });
        },
        { timing: 3000 }
      );
    }
  });

export default makeServer;
