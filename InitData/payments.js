export default [{
	description: "（商家仅支持在线支付）",
	disabled_reason: "",
	id: 1,
	is_online_payment: true,
	name: "在线支付",
	promotion: [],
	select_state: 1,
}, {
	description: "（商家不支持货到付款）",
	disabled_reason: "商家仅支持在线支付",
	id: 2,
	is_online_payment: false,
	name: "货到付款",
	promotion: [],
	select_state: -1,
}]