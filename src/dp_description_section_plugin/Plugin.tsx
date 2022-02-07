// (C) 2021 GoodData Corporation
import {
    DashboardContext,
    DashboardPluginV1,
    IDashboardCustomizer, newCustomWidget,
    newDashboardItem,
    newDashboardSection
} from "@gooddata/sdk-ui-dashboard";
import entryPoint from "../dp_description_section_plugin_entry";
import { Description } from "./Description";

export class Plugin extends DashboardPluginV1 {
  public readonly author = entryPoint.author;
  public readonly displayName = entryPoint.displayName;
  public readonly version = entryPoint.version;
  public readonly minEngineVersion = entryPoint.minEngineVersion;
  public readonly maxEngineVersion = entryPoint.maxEngineVersion;

  public description = "";

  public onPluginLoaded(
    _ctx: DashboardContext,
    parameters?: string
  ): Promise<void> | void {
    this.description = parameters || "";
  }

  public register(
    _ctx: DashboardContext,
    customize: IDashboardCustomizer,
  ): void {
    customize
      .customWidgets()
      .addCustomWidget("myCustomDescription", Description);
    customize.layout().customizeFluidLayout((_layout, customizer) => {
      customizer.addSection(
        0,
        newDashboardSection(
          "How to read this Dashboard",
          newDashboardItem(
            newCustomWidget("myWidget1", "myCustomDescription"),
            {
              xl: {
                gridWidth: 12,
                gridHeight: 1,
              },
            }
          )
        )
      );
    });
  }
}
