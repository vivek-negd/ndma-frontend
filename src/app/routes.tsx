import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthService } from "../services";
import { isRoleAllowed, ROLE_DEFAULT_ROUTES, UserRole } from "../utils/rbac";
import { Auth, Settings, Pages, PageEditor, Users } from "../admin/pages";
import { SEOManagement, SEOEditor } from "../admin/pages/seo";
import { ContentManagement, ContentEditor } from "../admin/pages/content";
import { ManageAccount } from "../admin/pages/account";
import { MainLayout } from "../admin/components/layout";
import UserForm from "../admin/pages/users/UserForm";
import BulkVolunteerUpload from "../admin/pages/volunteers/BulkVolunteerUpload";
import UAMSVolunteers from "../admin/pages/volunteers/UMASVolunteers";
import YAMSVolunteers from "../admin/pages/volunteers/YMASVolunteers";
import UploadedVolunteerList from "../admin/pages/volunteers/UploadedVolunteerList";
import BatchWiseVolunteerList from "../admin/pages/volunteers/BatchWiseVolunteerList";
import { MasterTrainersDetail } from "../admin/pages/masterTrainerDetails/MasterTrainersDeatail";
import { FourthDayTrainingForm, SeventhDayTrainingForm, TrainingScheduleForm } from "../admin/pages/trainingWorkflow";
import { InsuranceMoU, StateMoU } from "../admin/pages/mouDetails";
import { Distribution } from "../admin/pages/erk";
import { Procurement } from "../admin/pages/erk";
import { AmountReleased, BankDetails, StatementOfExpenditure, UCDetails } from "../admin/pages/accounts";
import { Insurance, SDMAContact, YouthOrganizationContact } from "../admin/pages/contact";
import { DDMAContact } from "../admin/pages/contact";
import { FinancialViewStatistics, NationalLevelStatistics } from "../admin/pages/statistics";
import { BannerSection } from "../admin/pages/bannerSection";
import LoginPage from "../web/pages/auth/login";
import Home from "../web/pages/home/Home";
import Dashboard from "../admin/pages/Dashboard/Dashboard";
import { AboutUs } from "../web/pages/aboutUs/AboutUs";
import { YouthOrganisationRecords, BulkYouthOrgUpload } from "../admin/pages/youthOrganizationWorkflow";
import { YouthOrganisationForm } from "../admin/pages/youthOrganizationWorkflow/YouthOrganisationForm";
import { FirstDayTrainingForm } from "../admin/pages/trainingWorkflow/FirstDayTrainingForm";
import { FirstDayTrainingRecords } from "../admin/pages/trainingWorkflow/FirstDayTrainingRecords";
import { SeventhDayTrainingRecords } from "../admin/pages/trainingWorkflow/SeventhDayTrainingRecords";
import { FourthDayTrainingRecords } from "../admin/pages/trainingWorkflow/FourthDayTrainingRecords";
import { TrainingScheduleRecords } from "../admin/pages/trainingWorkflow/TrainingScheduleRecords";

/** Redirects to the role's default page if the current path is not allowed */
const RoleGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const role = AuthService.getRole();
  if (!isRoleAllowed(role, location.pathname)) {
    const fallback = ROLE_DEFAULT_ROUTES[(role as UserRole)] ?? '/login';
    return <Navigate to={fallback} replace />;
  }
  return <>{children}</>;
};
export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes - no layout */}
      <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      {/* Protected routes - with layout + role guard */}
      <Route element={<RoleGuard><MainLayout /></RoleGuard>}>
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<ManageAccount />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/pages/create" element={<PageEditor />} />
        <Route path="/pages/edit/:id" element={<PageEditor />} />
        <Route path="/content" element={<ContentManagement />} />
        <Route path="/banner-section" element={<BannerSection />} />
        <Route path="/content/create" element={<ContentEditor />} />
        <Route path="/content/edit/:id" element={<ContentEditor />} />
        <Route path="/seo" element={<SEOManagement />} />
        <Route path="/seo/edit/:id" element={<SEOEditor />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<UserForm />} />
        <Route path="/users/edit/:id" element={<UserForm />} />
        <Route path="/youth-organization-record" element={<YouthOrganisationRecords />} />
        <Route path="/youth-organization-form" element={<YouthOrganisationForm />} />
        <Route path="/bulk-youth-org-upload" element={<BulkYouthOrgUpload />} />
        <Route path="/first-day-training-form" element={<FirstDayTrainingForm />} />
        <Route path="/first-day-training-records" element={<FirstDayTrainingRecords />} />
        <Route path="/fourth-day-training-records" element={<FourthDayTrainingRecords />} />
        <Route path="/fourth-day-training-form" element={<FourthDayTrainingForm />} />
        <Route path="/seventh-day-training-records" element={<SeventhDayTrainingRecords />} />
        <Route path="/seventh-day-training-form" element={<SeventhDayTrainingForm />} />
        <Route path="/training-schedule-form" element={<TrainingScheduleForm />} />
        <Route path="/training-schedule-records" element={<TrainingScheduleRecords />} />
        <Route path="/bulk-volunteer-upload" element={<BulkVolunteerUpload />} />
        <Route path="/master-trainers-detail" element={<MasterTrainersDetail />} />
        <Route path="/mou/state-mou" element={< StateMoU/>} />
        <Route path="/mou/insurance-mou" element={< InsuranceMoU/>} />
        <Route path="/erk/procurement" element={< Procurement/>} />
        <Route path="/erk/distribution" element={< Distribution/>} />
        <Route path="/master-trainers-detail" element={<MasterTrainersDetail />} />
        <Route path="/accounts/amount-released" element={<AmountReleased />} />
        <Route path="/accounts/bank-details" element={<BankDetails />} />
        <Route path="/accounts/statement-of-expenditure" element={<StatementOfExpenditure />} />
        <Route path="/accounts/uc-details" element={<UCDetails />} />
        <Route path="/contact/ddma-contact" element={<DDMAContact />} />
        <Route path="/contact/sdma-contact" element={<SDMAContact />} />
        <Route path="/contact/insurance" element={<Insurance />} />
        <Route path="/contact/youth-organization-contact" element={<YouthOrganizationContact />} />  
        <Route path="/statistics/national-level" element={<NationalLevelStatistics />} />
        <Route path="/statistics/financial-view" element={<FinancialViewStatistics />} />      
        <Route path="/umas-volunteer" element={<UAMSVolunteers />} />
        <Route path="/yams-volunteer" element={<YAMSVolunteers />} />
        <Route path="/volunteer-details" element={<UploadedVolunteerList />} />
        <Route path="/batchwise-volunteers-list/:batchId" element={<BatchWiseVolunteerList />} />

      </Route>

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
