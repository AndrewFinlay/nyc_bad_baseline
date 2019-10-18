# Demo repo for strange nyc baseline results

This repo aims to show some strange results that occur when trying to generate a baseline.  

The problem was first noticed on some AngularJS code.
It seems that the problems occur due to missing comments and differences in whitespace.
The source in the `lib` directory should be the same apart from comment and whitespace differences.

The `lib` directory is instrumented by nyc and put in the `instrumented` directory.
The command `nyc --nycrc-path=<nycrc> /usr/bin/true 1> <report_file>.txt` is run over both the raw and instrumented code.
I'm assuming that we expect to see the same coverage output at this point, however the two sets of baseline coverage differ at this point.

To generate the instrumented code and baseline coverage reports run `npm i` then `npm t`, but have a look at `package.json` to see what it's doing first.
