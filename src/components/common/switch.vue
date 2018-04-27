<template>
	<div class="switch">
		<label><input class="mui-switch" type="checkbox"></label>
	</div>
</template>
<style type="text/css">
.switch {
	float: right;
}
	.mui-switch {
  width: 100px;
  height: 64px;
  position: relative;
  border: 1px solid #dfdfdf;
  background-color: #ccc;
  box-shadow: #ccc 0 0 0 0 inset;
  border-radius: 103px;
  border-top-left-radius: 103px;
  border-top-right-radius: 103px;
  border-bottom-left-radius: 103px;
  border-bottom-right-radius: 103px;
  background-clip: content-box;
  display: inline-block;
  -webkit-appearance: none;
  user-select: none;
  outline: none; }
  .mui-switch:before {
    content: '';
    width: 56px;
    height: 56px;
    position: absolute;
    top: 2px;
    border-radius: 56px;
    border-top-left-radius: 56px;
    border-top-right-radius: 56px;
    border-bottom-left-radius: 56px;
    border-bottom-right-radius: 56px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); }
  .mui-switch:checked {
    border-color: #ffaf67;
    box-shadow: #ffaf67 0 0 0 16px inset;
    background-color: #ffaf67; }
    .mui-switch:checked:before {
      right: 2px; }
  .mui-switch.mui-switch-animbg {
    transition: background-color ease 0.4s; }
    .mui-switch.mui-switch-animbg:before {
      transition: left 0.3s; }
    .mui-switch.mui-switch-animbg:checked {
      box-shadow: #dfdfdf 0 0 0 0 inset;
      background-color: #64bd63;
      transition: border-color 0.4s, background-color ease 0.4s; }
      .mui-switch.mui-switch-animbg:checked:before {
        transition: left 0.3s; }
  .mui-switch.mui-switch-anim {
    transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s; }
    .mui-switch.mui-switch-anim:before {
      transition: left 0.3s; }
    .mui-switch.mui-switch-anim:checked {
      box-shadow: #64bd63 0 0 0 16px inset;
      background-color: #64bd63;
      transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s; }
      .mui-switch.mui-switch-anim:checked:before {
        transition: left 0.3s; }
</style>
