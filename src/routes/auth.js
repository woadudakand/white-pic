import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import FileUploader from '../components/fileuploader';

const NotFound = () => {
  return <Redirect to="/" />;
};

const FrontendRoutes = () => {
  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route exact path="/" component={FileUploader} />
        <Route exact path="*" component={NotFound} />
      </Suspense>
    </Switch>
  );
};

export default FrontendRoutes;
