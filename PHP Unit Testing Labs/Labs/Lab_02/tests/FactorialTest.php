<?php
use PHPUnit\Framework\TestCase;
require('./src/Factorial.php');

class FactorialTest extends TestCase {

    public function testCalcuateFactorialOfZeroValue() {
        $fac = new Factorial;
        $result = $fac->calculateFactorial(0);
        $this ->assertEquals(1,$result);
    }

    public function testCalcuateFactorialOfOneValue() {
        $fac = new Factorial;
        $result = $fac->calculateFactorial(1);
        $this ->assertEquals(1,$result);
    }

    public function testCalcuateFactorialOfIntValue() {
        $fac = new Factorial;
        $result = $fac->calculateFactorial(5);
        $this ->assertEquals(120,$result);
    }
    public function testCalcuateFactorialOfNegativeValue() {
        $fac = new Factorial;
        $result = $fac->calculateFactorial(-3);
        $this ->assertEquals(null,$result);
    }
    public function testCalcuateFactorialOfFloatValue() {
        $fac = new Factorial;
        $result = $fac->calculateFactorial(1.5);
        $this ->assertEquals(null,$result);
    }

    public function testCalcuateFactorialOfFalseValue() {
        $fac = new Factorial;
        $result = $fac->calculateFactorial(false);
        $this ->assertEquals(null,$result);
    }
    public function testCalcuateFactorialOfStringValue() {
        $fac = new Factorial;
        $result = $fac->calculateFactorial('abc');
        $this ->assertEquals(null,$result);
    }
}

