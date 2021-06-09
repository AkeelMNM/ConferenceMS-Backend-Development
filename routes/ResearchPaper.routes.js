const Router = require('@koa/router');

const {addResearchPaper, getAllResearchPaper, getResearchPaperByUserId,getResearchPaperById,approvalStatus, updateResearchPaper,paymentForSubmission, removeResearchPaperById} = require('../api/ResearchPaper.api');
const {addResearchPaperFile} = require('../api/ResearchPFileUpload.api');

const router = new Router({
    prefix:'/researchPaper'
})

/**
 * @important  file input should be separated when saving the file i'm only saving the location of the file
 */

/*router.post('/reFile',async ctx => {
    let file = ctx.request.body;
    file = await addResearchPaperFile(file);
    ctx.response.state = 201;
    ctx.body =file;
})*/

/**
 * Route for add Research paper submission
 */
router.post('/',async ctx => {
    let researchPaper = ctx.request.body;
    researchPaper = await addResearchPaper(researchPaper);
    ctx.response.state = 201;
    ctx.body = researchPaper;
})


/**
 * Route for get all Research paper submission
 */
router.get('/', async ctx =>{
    ctx.body = await getAllResearchPaper();
});

/**
 * Route for get Research paper submission of Researcher
 */
router.get('/:id', async ctx =>{
    const userID = ctx.params.id;
    ctx.body = await getResearchPaperByUserId(userID);
});

/**
 * Route for get Research paper submission by id
 */
router.get('/paper/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await getResearchPaperById(id);
});

/**
 * Route for update Research paper submission
 */
router.put('/:id',async ctx =>{
    const id = ctx.params.id;
    let researchPaper = ctx.request.body;
    ctx.body = await updateResearchPaper(id,researchPaper);
    ctx.body = researchPaper;
})

/**
 * Route for approval Research paper submission
 */
router.put('/approval/:id',async ctx => {
    let id = ctx.params.id;
    let approval = ctx.request.body;
    let researchPaper = await approvalStatus(id,approval);
    ctx.body = researchPaper;
})

/**
 * Route for payment for Research paper submission
 */
router.put('/payment/:id',async ctx => {
    let id = ctx.params.id;
    let researchPayment = ctx.request.body;
    let researchPaper = await paymentForSubmission(id,researchPayment);
    ctx.body = researchPaper;
})
/**
 * Route for remove Research paper submission
 */
router.delete('/:id',async ctx =>{
    const id = ctx.params.id;
    ctx.response.state = 204;
    ctx.body = await removeResearchPaperById(id);
})

module.exports = router;