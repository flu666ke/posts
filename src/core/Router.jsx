import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LatestPosts from '../components/pages/LatestPosts';

import ViewPost from '../components/pages/ViewPost';

export default function () {
  return (
    <Switch>
      <Route path="/" exact component={LatestPosts} />
      <Route path="/post/:postId" component={ViewPost} />
    </Switch>
  );
}
