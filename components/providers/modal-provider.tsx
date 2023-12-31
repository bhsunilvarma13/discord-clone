"use client";
import CreateServerModal from "@/components/modals/createServerModal";
import { useEffect, useState } from "react";
import InviteModal from "@/components/modals/inviteModal";
import EditServerModal from "@/components/modals/editServerModal";
import MembersModal from "@/components/modals/membersModal";

export const ModalProvider = () => {
  const [isMounted, SetIsMounted] = useState(false);

  useEffect(() => {
    SetIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
    </>
  );
};
