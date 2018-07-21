<template>
    <div class="picker-div">
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
</template>

<script>
import cf from "../js/codeforces.js";
export default {
  name: "VCPicker",
  data() {
    return {
      input: "",
      handles: []
    };
  },
  mounted() {
    componentHandler.upgradeDom();
  },
  methods: {
    vc() {
      cf.vcWith(this.handles, data => console.log(data));
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
.picker-div {
  width: 30%;
  margin: 25px auto;
  text-align: center;
}

.removable-handle {
  float: right;
  cursor: pointer;
}
</style>
