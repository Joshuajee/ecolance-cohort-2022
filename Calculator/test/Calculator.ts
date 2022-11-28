
import { expect, assert } from "chai";
import { ethers } from "hardhat";

interface ITEST {
  x: number;
  y: number;
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateData(iterations: number) : ITEST[] {

  const MAX = 1000000

  const array: ITEST[] = []

  for (let i = 0; i < iterations; i++) {
    array.push({x: getRandomNumber(0, MAX), y: getRandomNumber(0, MAX) })
  }

  return array
}

describe("Testing My simple calculator", function () {
  
  let calculatorFactory, calculator: any;
  let testData: ITEST[]; 


  beforeEach(async function () {
    calculatorFactory = await ethers.getContractFactory("Calculator");
    calculator = await calculatorFactory.deploy();
    testData = generateData(1000)
  });


  it("Addition", async function () {
    for (let i = 0; i < testData.length; i++) {
      const x = testData[i].x;
      const y = testData[i].y;
      const result = await calculator.add(x, y);
      assert.equal(result, x + y);
    }
  });

  it("Substraction", async function () {
    for (let i = 0; i < testData.length; i++) {
      const x = testData[i].x;
      const y = testData[i].y;
      const result = await calculator.substraction(x, y);
      assert.equal(result, Math.abs(x - y));
    }
  });

  it("Multiplication", async function () {
    for (let i = 0; i < testData.length; i++) {
      const x = testData[i].x;
      const y = testData[i].y;
      const result = await calculator.multiplication(x, y);
      assert.equal(result, x * y);
    }
  });

  it("Division", async function () {
    for (let i = 0; i < testData.length; i++) {
      const x = testData[i].x;
      const y = testData[i].y;
      const result = await calculator.division(x, y);
      assert.equal(result, Math.floor(x / y));
    }
  });

});

 