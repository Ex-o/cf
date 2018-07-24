<template>
    <div class="picker-div">
      <div class="column1">
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                <th class="mdl-data-table__cell--non-numeric"><b>Handle</b></th>
                </tr>
            </thead>
            <tbody class="handle-list">
                <tr v-for="handle in handles" :key="handle">
                    <td class="mdl-data-table__cell--non-numeric">{{handle}}</td>
                    <td>
                        <span @click="removeHandle(handle)" class="removable-handle"><b>X</b></span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input @keyup.enter="addHandle" v-model="input" class="handle-input mdl-textfield__input" type="text" id="sample3">
            <label class="mdl-textfield__label" for="sample3">Handle</label>
        </div>
        <!-- Colored mini FAB button -->
        <button @click="addHandle" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
            <i class="material-icons">add</i>
        </button>
        <!-- Raised button with ripple -->
        <button @click="vc" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            VC
        </button>
      </div>
      <table class="column2 mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
            <tr>
            <th class="mdl-data-table__cell--non-numeric"><b>{{contestsTitle}}</b></th>
            </tr>
        </thead>
        <tbody class="contests-list">
            <tr v-for="contest in contests" :key="contest.id">
                <td class="mdl-navigation__link mdl-data-table__cell--non-numeric">
                  <a style="width: auto" class="mdl-navigation__link" :href="'http://codeforces.com/contest/' + contest.id">
                    {{contest.name}}
                  </a>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import cf from "../js/codeforces.js";
export default {
  name: "VCPicker",
  data() {
    return {
      input: "",
      handles: [],
      contests: [],
      contestsTitle: "Contests"
    };
  },
  mounted() {
    componentHandler.upgradeDom();
  },
  methods: {
    vc() {
      if (this.handles.length == 0) return;
      this.contestsTitle = "Loading contests";
      cf.vcWith(this.handles, data => {
        this.contestsTitle = `${data.length} Contests`;
        this.contests = data;
      });
    },
    addHandle() {
      let handle = this.input.trim();
      if (handle.length > 0 && this.handles.indexOf(handle) < 0) {
        this.handles.push(handle);
        this.input = "";
      }
    },
    removeHandle(handle) {
      let idx = this.handles.indexOf(handle);
      this.handles.splice(idx, 1);
    }
  }
};
</script>

<style>
body {
}

.picker-div {
  width: auto;
  padding-top: 5em;
  padding-left: 1em;
  padding-right: 1em;
}

.removable-handle {
  float: right;
  cursor: pointer;
}

.column1,
.column2 {
  /* width: auto; */
  min-width: calc(100% / 2 - 20px);
  max-width: calc(100% / 2 - 20px);
  /* padding: 10px; */
  overflow: auto;
  display: inline-block;
}

.column1 {
  float: left;
}

.column2 {
  float: right;
}

@media only screen and (max-width: 720px) {
  .column1,
  .column2 {
    width: auto;
    max-width: inherit;
    margin: 0 auto;
    float: none;
    display: block;
  }
}
</style>
