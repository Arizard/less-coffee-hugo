---
title: "Redirect a file writer to a variable in PHP using Output Buffers"
date: 2025-02-11T20:41:10+11:00
author: Arie Oldman
draft: false
summary: What to do if your legacy dependency only writes to file.
---

Sometimes you have a legacy PHP package which only lets you save data to a file path, while in the modern day we want this data as a blob which we can send to S3 or Cloud Storage. This is how you can use output buffers to capture that data being written to file and redirect it into a variable.

```php
use PhpOffice\PhpSpreadsheet\IOFactory;
// legacy package without write-to-variable support

...

$writer = IOFactory::createWriter($phpExcel, $this->excelVersion);

ob_start();                         // begin capturing output buffer
$objWriter->save('php://output');   // save to the output buffer
$excelData = ob_get_contents();     // read buffer
                                    // now can write this to S3 easily
ob_end_clean();                     // discard the buffer contents
```
