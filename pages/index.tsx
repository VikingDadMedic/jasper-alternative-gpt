import React from 'react';
import Layout from '../components/Layout';
import CardGrid from "../components/CardGrid";
import { TEMPLATES } from "../constants/templates";

const HomePage: React.FC = () =>
{

    return (
        <Layout title="">
            <h1 className="mt-10 ml-10 text-4xl font-bold">
                Welcome to <span className="text-[#2B303A]">Toby Tasks</span>
            </h1>

            <h2 className="mt-5 ml-10 text-2xl font-light">
                Create amazing <strong className="text-rose-700">blog posts, marketing copy, SEO content</strong> and a
                lot more with Toby.
            </h2>
            <CardGrid cards={ TEMPLATES } />
        </Layout>
    );
};

export default HomePage;
