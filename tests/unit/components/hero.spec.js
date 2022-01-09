import { shallowMount } from "@vue/test-utils";
import Hero from "@/components/Hero.vue";

describe("Hero", () => {
  describe("hero image", () => {
    it("renders the hero image", () => {
      const wrapper = shallowMount(Hero);
      expect(wrapper.find(".hero-image").exists()).toBe(true);
    });

    it("includes alt text", () => {
      const wrapper = shallowMount(Hero);
      expect(wrapper.find(".hero-image").element.alt).toEqual(
        "Joseph Banass Logo"
      );
    });

    it("includes title", () => {
      const wrapper = shallowMount(Hero);
      expect(wrapper.find(".hero-image").element.title).toEqual(
        "Joseph Banass Hero Logo"
      );
    });
  });

  describe("subtitle", () => {
    it("Includes the correct subtitle", () => {
      const wrapper = shallowMount(Hero);
      expect(wrapper.find(".hero-text").element.textContent.trim()).toEqual(
        "FULL STACK DEVELOPER BASED IN CHICAGO."
      );
    });
  });
});
