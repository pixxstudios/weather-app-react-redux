import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';

const PORT =3030,
      app=express(),
      compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, function(err){
  if(err){
    console.log(err);
  }else{
    open(`http://localhost:${PORT}`);
  }
});
