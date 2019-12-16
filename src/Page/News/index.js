import React from 'react';
import Breadcrumb from '../../Components/Common/Breadcrumb';
import PageTitle from '../../Components/Common/PageTitle';
import NewsList from './News';

export default function News() {
    return (
        <div>
            <Breadcrumb pageName="集团新闻"/>
            <PageTitle title="集团新闻"/>
            <NewsList />
        </div>
    );
}
