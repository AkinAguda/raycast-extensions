import { ActionPanel, List } from "@raycast/api";
import React from "react";
import { ActionOpenCommandPreferences } from "./action-open-command-preferences";

export function ListEmptyView() {
  return (
    <List.EmptyView
      key={`empty-localDirectory`}
      title={"No Hidden Files"}
      icon={{ source: { light: "empty-view-icon.png", dark: "empty-view-icon@dark.png" } }}
      description={`You can hide files via the "Hide Files" command`}
      actions={
        <ActionPanel>
          <ActionOpenCommandPreferences />
        </ActionPanel>
      }
    />
  );
}
