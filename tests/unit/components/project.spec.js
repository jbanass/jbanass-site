import { shallowMount } from "@vue/test-utils";
import Project from "@/components/Project.vue";

describe("Project", () => {
  describe("project image", () => {
    it("renders the project image", () => {
      const wrapper = shallowMount(Project);
      expect(wrapper.find(".project__image img").exists()).toBe(true);
    });

    it("includes alt text", () => {
      const wrapper = shallowMount(Project);
      expect(wrapper.find(".project__image img").element.alt).toEqual(
        "A monitor with code displayed"
      );
    });

    it("includes title", () => {
      const wrapper = shallowMount(Project);
      expect(wrapper.find(".project__image img").element.title).toEqual(
        "Joseph Banass Project Logo"
      );
    });
  });

  describe("content", () => {
    describe("header", () => {
      it("has a text content stating 'PROJECTS'", () => {
        const wrapper = shallowMount(Project);
        expect(
          wrapper.find(".project__header").element.textContent.trim()
        ).toEqual("Projects");
      });
    });

    describe("subheader", () => {
      it("has a text content stating 'All talk and no show?'", () => {
        const wrapper = shallowMount(Project);
        expect(
          wrapper.find(".project__subheader").element.textContent.trim()
        ).toEqual("All talk and no show?");
      });
    });

    describe("description", () => {
      it("includes the proper content for the description", () => {
        const wrapper = shallowMount(Project);
        expect(
          wrapper.find(".project__description").element.textContent.trim()
        ).toEqual(
          "Not quite. Below are a few choice projects that I enjoyed making the most from different languages and frameworks, like Ruby, Python, Scala, Vue, and C++"
        );
      });
    });
  });
});
