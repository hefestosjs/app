import { Factory } from "@hefestos/core";
import { User } from "..";

export default new Factory().define(User, (faker) => {
  return {
    /**
     * Here you can add the field as a property, followed by the fakerjs generator.
     *
     * Example:
     * name: faker.person.fullName(),
     */
  };
});
