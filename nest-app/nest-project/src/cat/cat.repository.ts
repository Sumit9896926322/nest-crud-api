import { EntityRepository, Repository } from "typeorm";
import cat from "./cat.entity";

@EntityRepository(cat)
export default class CatRepository extends Repository<cat> {}