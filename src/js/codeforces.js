export default {
  apiUrl: "https://codeforces.com/api/",
  userStatus: "https://codeforces.com/api/user.status",
  contestsList: "https://codeforces.com/api/contest.list",
  gymList: "https://codeforces.com/api/contest.list?gym=true",

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
      console.log("Here");
      let someVar = {};
      $.get("https://raw.githubusercontent.com/Ex-o/cf/testing/contests.json", {}, (data) => {
        someVar = JSON.parse(data);
      });
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
              for (var con in someVar) {
                for (var j = 0; j < someVar[parseInt(con)].length; j++) {
                  if (someVar[parseInt(con)][j].name == sub.problem.name) {
                    contests.delete(parseInt(con));
                  }
                }
              }
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
  },

  gymWith: function (handles, callback) {
    if (!handles || handles.length <= 0)
      return;
    console.log("Handling");
    let contests = new Set([]);
    let contestsArray = [];
    $.get(this.gymList, {}, (data, status) => {
      data.result.filter(contest => contest.phase === "FINISHED").forEach(contest => {
        contests.add(contest.id);
        contestsArray.push(contest);
      });
      console.log("Here");
      let someVar = {};
      $.get("https://raw.githubusercontent.com/Ex-o/cf/testing/gymcontests.json", {}, (data) => {
        someVar = JSON.parse(data);
      });
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
              for (var con in someVar) {
                for (var j = 0; j < someVar[parseInt(con)].length; j++) {
                  if (someVar[parseInt(con)][j].Name == sub.problem.name) {
                    console.log(sub.problem.name);
                    contests.delete(parseInt(con));
                  }
                }
              }
            }
          }
          if (rem == 0) {
            rem = -1;
            console.log("done");
            if (callback) callback(contestsArray.reverse().filter(contest => contests.has(contest.id)));
          }
        }).fail(err => {
          rem--;
          if (rem == 0) {
            rem = -1;
            console.log("done");
            if (callback) callback(contestsArray.reverse().filter(contest => contests.has(contest.id)));
          }
        });
      }
    });
  }
}
