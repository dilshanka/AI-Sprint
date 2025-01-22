import React, { useState } from "react";
import SalesReports from "../components/Reports/salesReport";
import CustomerInquiriesReport from "../components/Reports/InquiriesReport";
import ProductPerformanceReport from "../components/Reports/ProductPerformance";
import ReturnRefundReport from "../components/Reports/RefundReport";
import SalesByRegionReport from "../components/Reports/RegionReport";

const SalesReport: React.FC = () => {
  const [selectedReports, setSelectedReports] = useState<string[]>([]);

  const handleCheckboxChange = (reportName: string) => {
    setSelectedReports((prev) =>
      prev.includes(reportName)
        ? prev.filter((report) => report !== reportName)
        : [...prev, reportName]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold  text-center text-gray-800 mt-10">Reports</h1>

      {/* Checkbox Selection */}
      <div className="grid grid-cols-2 gap-4 my-8 font-semibold">
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("SalesReports")}
            checked={selectedReports.includes("SalesReports")}
            className="mr-2"
          />
           Sales Report
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("CustomerInquiriesReport")}
            checked={selectedReports.includes("CustomerInquiriesReport")}
            className="mr-2"
          />
          Customer Inquiries Report
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("ProductPerformanceReport")}
            checked={selectedReports.includes("ProductPerformanceReport")}
            className="mr-2"
          />
          Product Performance Report
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("ReturnRefundReport")}
            checked={selectedReports.includes("ReturnRefundReport")}
            className="mr-2"
          />
          Return and Refund Report
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("SalesByRegionReport")}
            checked={selectedReports.includes("SalesByRegionReport")}
            className="mr-2"
          />
          Sales by Region Report
        </label>
      </div>

      {/* Render Selected Reports */}
      <div className="space-y-8">
        {selectedReports.includes("SalesReports") && <SalesReports />}
        {selectedReports.includes("CustomerInquiriesReport") && (
          <CustomerInquiriesReport />
        )}
        {selectedReports.includes("ProductPerformanceReport") && (
          <ProductPerformanceReport />
        )}
        {selectedReports.includes("ReturnRefundReport") && <ReturnRefundReport />}
        {selectedReports.includes("SalesByRegionReport") && (
          <SalesByRegionReport />
        )}
      </div>
    </div>
  );
};

export default SalesReport;
