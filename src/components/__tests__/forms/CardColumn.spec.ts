import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import i18n from "@/locales";
import CardColumn from "@/components/CardColumn.vue";
import type { Card } from "@/types/models/Card";

describe("CardColumn component", () => {
  const item: Card = {
    id: 1,
    title: "Card teste",
    description: "",
    column_id: 1,
  };

  const wrapper = mount(CardColumn, {
    global: { plugins: [i18n] },
    props: {
      item: item,
    },
  });

  const contentCardTitle = wrapper.find("#content_card_title");

  it("component props", () => {
    expect(wrapper.props().item).toStrictEqual(item);
  });

  it("emit event card clicked", () => {
    contentCardTitle.trigger("click", );

    expect(wrapper.emitted()).toHaveProperty("clicked");
    expect(wrapper.emitted("clicked")[0][0]).toStrictEqual(item);
  });
});
