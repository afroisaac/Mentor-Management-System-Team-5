import React, { useState } from "react";
import cx from "classnames";
import styles from "./DashboardSideBar.module.scss";
import "./DashboardActiveMenu.scss";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as ProfileIcon } from "@/assets/icons/profile-icon.svg";
import { ReactComponent as DashboardIcon } from "@/assets/icons/dashboard-icon.svg";
import { ReactComponent as ProgramsIcon } from "@/assets/icons/programs-icon.svg";
import { ReactComponent as TasksIcon } from "@/assets/icons/tasks-icon.svg";
import { ReactComponent as ReportsIcon } from "@/assets/icons/reports-icon.svg";
import { ReactComponent as MentorsIcon } from "@/assets/icons/mentors-icon.svg";
import { ReactComponent as MentorManagersIcon } from "@/assets/icons/mentor-managers-icon.svg";
import { ReactComponent as ApprovalRequestsIcon } from "@/assets/icons/approval-requests-icon.svg";
import { ReactComponent as CertificatesIcon } from "@/assets/icons/certificates-icon.svg";
import { ReactComponent as MessagesIcon } from "@/assets/icons/messages-icon.svg";
import { ReactComponent as DiscussionForumIcon } from "@/assets/icons/discussion-forum-icon.svg";
import { ReactComponent as SettingsIcon } from "@/assets/icons/settings-icon.svg";

const DashboardSideBar = () => {
  const location = useLocation();

  const currentPage = location.pathname.split("/")[2] || "";

  const menuItemsArray = [
    {
      name: "Profile",
      link: "profile",
      icon: <ProfileIcon />
    },
    {
      name: "Dashboard",
      link: "",
      icon: <DashboardIcon />
    },
    {
      name: "Programs",
      link: "programs",
      icon: <ProgramsIcon />
    },
    {
      name: "Tasks",
      link: "tasks",
      icon: <TasksIcon />
    },
    {
      name: "Reports",
      link: "reports",
      icon: <ReportsIcon />
    },
    {
      name: "Mentors",
      link: "mentors",
      icon: <MentorsIcon />
    },
    {
      name: "Mentor Managers",
      link: "mentor-managers",
      icon: <MentorManagersIcon />
    },
    {
      name: "Approval Requests",
      link: "approval-requests",
      icon: <ApprovalRequestsIcon />
    },
    {
      name: "Certificates",
      link: "certificates",
      icon: <CertificatesIcon />
    },
    {
      name: "Messages",
      link: "messages",
      icon: <MessagesIcon />
    },
    {
      name: "Discussion Forum",
      link: "discussion-forum",
      icon: <DiscussionForumIcon />
    },
    {
      name: "Settings",
      link: "settings",
      icon: <SettingsIcon />
    }
  ];

  console.log(currentPage, "location");
  const [activeIndex, setActiveIndex] = useState(
    menuItemsArray.findIndex((item) => item.link === currentPage)
  );

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={cx(styles.dashboardSideBarContainer, "flexCol")}>
      <Sidebar collapsed={false} breakPoint='xl' className={cx(styles.sidebar)}>
        <div className={cx(styles.userInfoDiv, "flexCol")}>
          <h5 className={cx(styles.name)}>Hi Kabiru</h5>
          <p className={cx(styles.role)}>Admin</p>
        </div>

        <Menu>
          {menuItemsArray.map((item, index) => {
            return (
              <MenuItem
                className={cx(activeIndex === index && "sidebar-active-menu")}
                active={activeIndex === index}
                onClick={() => handleMenuClick(index)}
                icon={item.icon}
                component={<Link to={item.link} />}
              >
                {" "}
                {item.name}
              </MenuItem>
            );
          })}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default DashboardSideBar;
