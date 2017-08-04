import React from "react"
import PropTypes from "prop-types"
import { Menu, Icon } from "antd"
import ContactHead from "./ContactHead"

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const ContactItem = ({ chatType, items, collapse, hasLogo, ...rest }) => {
	const tabs = items //["Contacts", "Chat", "Public"]
	const tabsLen = tabs.length
	const tabCls = collapse ? "" : ``

	const tabsItem = tabs.map(item =>
		<Menu.Item key={item.name} className={tabCls}>
			{hasLogo
				? <ContactHead className="fl nav-img" name="test" width={50} />
				: ""}
			<div className="nav-text">
				<p>
					{item.name}
				</p>
				<p className="nav-text-desc">
					{item.latestMessage}
				</p>
			</div>
			<div className="nav-op">
				{item.latestTime}
			</div>
		</Menu.Item>
	)

	return (
		<Menu
			id="x-contact-item"
			mode={"inline"}
			inlineIndent={24}
			{...rest}
			inlineCollapsed={false}
		>
			{tabsItem}
		</Menu>
	)
}

ContactItem.propTypes = {
	collapse: PropTypes.bool
	// menuOptions: PropTypes.array.isRequired,
}

export default ContactItem