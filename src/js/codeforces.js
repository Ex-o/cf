export default {
  apiUrl: "http://codeforces.com/api/",
  userStatus: "http://codeforces.com/api/user.status",
  contestsList: "http://codeforces.com/api/contest.list",

  vcWith: function (handles, callback) {
    if (!handles || handles.length <= 0)
      return;
    console.log("Handling");
    let contests = new Set([]);
    let contestsArray = [];
    $.get(this.contestsList, {}, (data, status) => {
      data.result.filter(contest => contest.phase === "FINISHED").forEach(contest => {
        contests.add(contest.id);
        contestsArray.push(contest);
      });
      // contests are
      // console.log(contests);
      // callback(contests);

      // now we handle the handles
      let rem = handles.length;
      for (let handle of handles) {
        console.log(this.userStatus + " " + handle);
        $.get(this.userStatus, {
          handle: handle
        }, (data, status) => {
          console.log(status);
          --rem;
          if (data && data.result) {
            for (let sub of data.result) {
              contests.delete(sub.problem.contestId);
            }
          }
          if (rem == 0) {
            rem = -1;
            console.log("done");
            if (callback) callback(contestsArray.filter(contest => contests.has(contest.id)));
          }
        }).fail(err => {
          rem--;
          if (rem == 0) {
            rem = -1;
            console.log("done");
            if (callback) callback(contestsArray.filter(contest => contests.has(contest.id)));
          }
        });
      }
    });
  }
}
