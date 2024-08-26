import React, { useState, useEffect } from "react";
import AppsTableRow from "./AppsTableRow";
import Link from "next/link";
import { useTheme } from "@/ThemeContext";
import ThemeToggle from "../ThemeToggle";
import Notis from "./Notis";
import AppsTableHeader from "./AppsTableHeader";
import FilterDropdown from "./FilterDropdown";
import SortDropdown from "./SortDropdown";
import AppsFilter from "./AppsFilter";

const AppsTable = () => {
  const { darkMode } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRecents, setShowRecents] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleRecents = () => {
    setShowRecents(!showRecents);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={`dashboard-container ${darkMode ? "dark" : "light"}`}>
      <div className="dashboard-header">
        <h2>My applications</h2>
        <ThemeToggle />
        <div
          className={`notification-icon ${darkMode ? "dark" : "light"}`}
          onClick={toggleNotifications}
        >
          <img
            src={`${darkMode ? "/notification2.png" : "/notification.png"}`}
            alt="Notifications"
          />
        </div>
        {showNotifications && <Notis darkMode={darkMode} />}
      </div>
      <AppsFilter
        showFilters={showFilters}
        showRecents={showRecents}
        onClick={toggleRecents}
        onClick2={toggleFilters}
      />
      <div className="table-container">
        <AppsTableHeader />
        <AppsTableRow
          name="Application name"
          type="Application"
          status="ACTIVE"
          team="+1"
          creationDate="12/03/2025"
          renewalDate="12/03/2025"
          instanceType="STANDARD"
          mode={darkMode}
        />

        <AppsTableRow
          name="Application name"
          type="Application"
          status="ACTIVE"
          team="+1"
          creationDate="12/03/2025"
          renewalDate="12/03/2025"
          instanceType="STANDARD"
          mode={darkMode}
        />
        <AppsTableRow
          name="Application name"
          type="Application"
          status="ACTIVE"
          team="+1"
          creationDate="12/03/2025"
          renewalDate="12/03/2025"
          instanceType="STANDARD"
          mode={darkMode}
        />
        <AppsTableRow
          name="Application name"
          type="Application"
          status="ACTIVE"
          team="+1"
          creationDate="12/03/2025"
          renewalDate="12/03/2025"
          instanceType="STANDARD"
          mode={darkMode}
        />
      </div>
    </div>
  );
};

export default AppsTable;