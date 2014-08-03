$(function() {
  var len = 500;
  var svg = d3.select("body").append("svg").
      attr("width", len).
      attr("height", len);

  var color = d3.scale.category20().domain(data.length);
  var pie = d3.layout.pie().
      sort(function(a, b) { return d3.ascending(a.i, b.i); }).
      value(function(d) {
        return d.range.sequenceEnd - d.range.sequenceStart;
      });

  var g = svg.selectAll('g').data(pie(data)).
      enter().
          append('g').
          attr('transform', 'translate(' + len/2 + ',' + len/2 + ')').
          attr('fill', function(d, i) { return color(i); });

  var arc0 = d3.svg.arc().
      innerRadius(len/4).
      outerRadius(len/4);
  var arc = arc0.outerRadius(function(d) {
    return len/4 + Math.min(2*d.data.meanCoverage, len);
  });
  g.append('path').attr('d', arc0).
      transition().
          ease('bounce').
          delay(250).attrTween('d', function(d) {
            var interpolate = d3.interpolate(0, d.data.meanCoverage);
            return function(t) {
              d.data.meanCoverage = interpolate(t);
              return arc(d);
            };
          });

  // Add a label for each chromosome.
  g.append('text').
      text(function(d) { return d.data.range.sequenceName; }).
      attr('transform', function(d) {
        var c = arc.centroid(d),
            x = c[0],
            y = c[1],
            h = Math.sqrt(x*x + y*y);
        var lr = arc.outerRadius()(d) + 20;
        return 'translate(' + (x/h * lr) +  ',' + (y/h * lr) +  ')';
      }).
      attr('text-anchor', 'middle').
      attr('fill', function(d, i) { return color(i); }).
      attr('opacity', 0).
      transition().delay(700).duration(300).ease('in').attr('opacity', 1);
});

var data = [
  {
   "range": {
    "sequenceName": "chrM",
    "sequenceStart": "1",
    "sequenceEnd": "16570"
   },
   "meanCoverage": 1927.357
  },
  {
   "range": {
    "sequenceName": "chr1",
    "sequenceStart": "1",
    "sequenceEnd": "249250622"
   },
   "meanCoverage": 30.885408
  },
  {
   "range": {
    "sequenceName": "chr2",
    "sequenceStart": "1",
    "sequenceEnd": "243199374"
   },
   "meanCoverage": 32.82156
  },
  {
   "range": {
    "sequenceName": "chr3",
    "sequenceStart": "1",
    "sequenceEnd": "198022431"
   },
   "meanCoverage": 32.17489
  },
  {
   "range": {
    "sequenceName": "chr4",
    "sequenceStart": "1",
    "sequenceEnd": "191154277"
   },
   "meanCoverage": 33.562508
  },
  {
   "range": {
    "sequenceName": "chr5",
    "sequenceStart": "1",
    "sequenceEnd": "180915261"
   },
   "meanCoverage": 32.260685
  },
  {
   "range": {
    "sequenceName": "chr6",
    "sequenceStart": "1",
    "sequenceEnd": "171115068"
   },
   "meanCoverage": 32.507797
  },
  {
   "range": {
    "sequenceName": "chr7",
    "sequenceStart": "1",
    "sequenceEnd": "159138664"
   },
   "meanCoverage": 32.478718
  },
  {
   "range": {
    "sequenceName": "chr8",
    "sequenceStart": "1",
    "sequenceEnd": "146364023"
   },
   "meanCoverage": 32.358784
  },
  {
   "range": {
    "sequenceName": "chr9",
    "sequenceStart": "1",
    "sequenceEnd": "141213432"
   },
   "meanCoverage": 27.832394
  },
  {
   "range": {
    "sequenceName": "chr10",
    "sequenceStart": "1",
    "sequenceEnd": "135534748"
   },
   "meanCoverage": 34.82463
  },
  {
   "range": {
    "sequenceName": "chr11",
    "sequenceStart": "1",
    "sequenceEnd": "135006517"
   },
   "meanCoverage": 31.779787
  },
  {
   "range": {
    "sequenceName": "chr12",
    "sequenceStart": "1",
    "sequenceEnd": "133851896"
   },
   "meanCoverage": 31.456875
  },
  {
   "range": {
    "sequenceName": "chr13",
    "sequenceStart": "1",
    "sequenceEnd": "115169879"
   },
   "meanCoverage": 27.427082
  },
  {
   "range": {
    "sequenceName": "chr14",
    "sequenceStart": "1",
    "sequenceEnd": "107349541"
   },
   "meanCoverage": 27.055193
  },
  {
   "range": {
    "sequenceName": "chr15",
    "sequenceStart": "1",
    "sequenceEnd": "102531393"
   },
   "meanCoverage": 25.435097
  },
  {
   "range": {
    "sequenceName": "chr16",
    "sequenceStart": "1",
    "sequenceEnd": "90354754"
   },
   "meanCoverage": 31.857576
  },
  {
   "range": {
    "sequenceName": "chr17",
    "sequenceStart": "1",
    "sequenceEnd": "81195211"
   },
   "meanCoverage": 30.142742
  },
  {
   "range": {
    "sequenceName": "chr18",
    "sequenceStart": "1",
    "sequenceEnd": "78077249"
   },
   "meanCoverage": 33.670208
  },
  {
   "range": {
    "sequenceName": "chr19",
    "sequenceStart": "1",
    "sequenceEnd": "59128984"
   },
   "meanCoverage": 30.086357
  },
  {
   "range": {
    "sequenceName": "chr20",
    "sequenceStart": "1",
    "sequenceEnd": "63025521"
   },
   "meanCoverage": 30.04705
  },
  {
   "range": {
    "sequenceName": "chr21",
    "sequenceStart": "1",
    "sequenceEnd": "48129896"
   },
   "meanCoverage": 27.389097
  },
  {
   "range": {
    "sequenceName": "chr22",
    "sequenceStart": "1",
    "sequenceEnd": "51304567"
   },
   "meanCoverage": 20.797207
  },
  {
   "range": {
    "sequenceName": "chrX",
    "sequenceStart": "1",
    "sequenceEnd": "155270561"
   },
   "meanCoverage": 16.647429
  },
  {
   "range": {
    "sequenceName": "chrY",
    "sequenceStart": "1",
    "sequenceEnd": "59373567"
   },
   "meanCoverage": 10.837241
  }
].map(function(d, i) {
  d.range.sequenceStart = Number(d.range.sequenceStart);
  d.range.sequenceEnd = Number(d.range.sequenceEnd);
  d.i = i;
  return d;
});
