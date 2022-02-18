import { shallowMount } from "@vue/test-utils";
import About from "@/components/About.vue";

describe("About", () => {
  describe("astronaut image", () => {
    it("renders the image", () => {
      const wrapper = shallowMount(About);
      expect(wrapper.find(".about__img img").exists()).toBe(true);
    });

    it("includes alt text", () => {
      const wrapper = shallowMount(About);
      expect(wrapper.find(".about__img img").element.alt).toEqual(
        "A floating astronaut in space on a laptop programming"
      );
    });

    it("includes title", () => {
      const wrapper = shallowMount(About);
      expect(wrapper.find(".about__img img").element.title).toEqual(
        "I prefer Spaces over Tabs"
      );
    });
  });

  describe("content", () => {
    describe("header", () => {
      it("has a text content stating 'HELLO'", () => {
        const wrapper = shallowMount(About);
        expect(
          wrapper.find(".about__header").element.textContent.trim()
        ).toEqual("Hello");
      });
    });

    describe("subheader", () => {
      it("has a text content stating 'Passionate. Involved. Dedicated.'", () => {
        const wrapper = shallowMount(About);
        expect(
          wrapper.find(".about__subheader").element.textContent.trim()
        ).toEqual("Passionate. Involved. Dedicated.");
      });
    });

    describe("description", () => {
      it("includes the proper content for the description", () => {
        const wrapper = shallowMount(About);
        expect(
          wrapper.find(".about__description").element.textContent.trim()
        ).toEqual(
          "I am an extremely motivated Chicago-based developer immersed in the potential of computers since the ripe age of seven. Always consumed by the latest hardware and software trends, I live and breathe to push the limits of what people think apps can do."
        );
      });
    });
  });
});
