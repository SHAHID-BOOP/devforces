import { Router } from "express";

const router = Router();

router.get("/active", (req,res) => {
    const {offest, page} = req.query;
})

router.get("/finished", (req,res) => {
    const {offest, page} = req.query;
    
})

router.get("/:contestId", (req,res) => {
    const contestId =  req.params.contestId
});

router.get("/:contestId/:challengeId", (req,res) => {
    const contestId =  req.params.contestId
});

router.get("/leaderboard/:contestId", (req,res) => {

})

router.post("/submit/:challengeId", (req,res) => {
    // have rate limitting 
    // max 20 submissions per problem
    //forward the request to the GPT
    // store the response in the  sorted set and DB
})

export default router;