import React from 'react';
import App from './App';
import { create } from "react-test-renderer";
import TreeComponent from './Components/TreeComponent';

let arr = [{
  "name": "Baobab",
  "species_name": "Adansonia",
  "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg",
  "showImage": false
},
{
  "name": "Red Mangrove",
  "species_name": "Rhizophora mangle",
  "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg",
  "showImage": false
},
{
  "name": "Common Hornbeam",
  "species_name": "Carpinus betulus",
  "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Carpinus_betulus_-_Hunsr%C3%BCck_001.jpg",
  "showImage": false
},
{
  "name": "Turkey Oak",
  "species_name": "Quercus cerris",
  "image": "https://upload.wikimedia.org/wikipedia/commons/3/34/Quercus_cerris.JPG",
  "showImage": false
},
{
  "name": "Japanese red pine",
  "species_name": "Pinus densiflora",
  "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG",
  "showImage": false
}];


describe("App component", () => {
  test("it shows the expected header on load", () => {
    const component = create(<App/>);
    const instance = component.root;
    const haedings = instance.findAllByType("h1");
    const header = haedings[0];
    expect(header.props.children).toBe("Tree Showcase");
  });
});


describe("Tree component", () => {
  test("it shows the expected text when clicked", () => {
    const component = create(<TreeComponent data={arr} />);
    const instance = component.root;
    const btn = instance.findAllByType("button");
    const button = btn[0];
    expect(button.props.children).toBe("Show Image");
    button.props.onClick();
    expect(button.props.children).toBe("Hide Image");
  });

  test("it shows the expected heading on load", () => {
    const component = create(<TreeComponent data={arr} />);
    const instance = component.root;
    const header = instance.findAllByType("h3");
    const heading = header[0];
    expect(heading.props.children).toBe("Baobab");
    
  });
});


