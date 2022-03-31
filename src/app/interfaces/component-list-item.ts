import { Component, Type } from "@angular/core";

export interface ComponentListItem {
  id: number,
  name: string,
  templateId: string,
  component: Component,
  icon: string
}
