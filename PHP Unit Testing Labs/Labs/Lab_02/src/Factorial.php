<?php

use function PHPUnit\Framework\equalTo;

class Factorial
{
    public function calculateFactorial($n)
    {
        if (is_bool($n) && $n == false) {
            return null;
        }
        if ($n == 0 || $n == 1) {
            return 1;
        }
        if (!is_string($n) && $n != 1 && $n < 3 && $n > 0 && !is_float($n)) {
            return ($n - 1) * $n;
        }
        if (!is_string($n) && $n != 1 && $n > 3 && !is_float($n)) {
            $f = 1;
            for ($i = 1; $i <= $n; $i++) {
                $f = $f * $i;
            }
            return $f;
        }

        return null;
    }
}
