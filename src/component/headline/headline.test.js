import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have pops", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description"
      };

      component = setUp(props);
    });

    it("Should render without errors", () => {
      // console.log(component.debug());
      const wrapper = findByTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a H1", () => {
      const h1 = findByTestAttr(component, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = findByTestAttr(component, "description");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("Should not render", () => {
      const wrapper = findByTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
