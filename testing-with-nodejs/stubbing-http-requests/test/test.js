const test = require("tape");
const sinon = require("sinon");
const hassonor = require("./hassonorUserData");
const github = require("./../github");

test("Get GitHub user by username", async (t) => {
    t.plan(3);
    sinon.stub(github, "getGitHubUser")
        .returns(hassonor);

    // we stub the response with sinon, so we can change the username and it will pass anyway
    const githubUser = await github.getGitHubUser("hassonor");
    t.equal(githubUser.id, 70104184);
    t.equal(githubUser.login, "hassonor");
    t.equal(githubUser.name, "Or Hasson");
});