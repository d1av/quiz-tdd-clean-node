import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapters";
import { makeSignUpController } from "../factories/signup";

export default (router: Router) => {
 router.post('/signup', adaptRoute(makeSignUpController()))
}