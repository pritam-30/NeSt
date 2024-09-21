// app/profile/layout.js
import SessionWrapper from "@/components/sessionProvider";

export default function ProfileLayout({ children }) {
  return <SessionWrapper>{children}</SessionWrapper>;
}
