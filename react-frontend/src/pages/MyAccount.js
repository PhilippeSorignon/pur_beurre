import React from "react";
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Navbar from '../components/Navbar';
import Masthead2 from '../components/Masthead2';
import Alert from '../components/Alert';
import Loader from '../components/Loader';

class MyAccount extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Query
          query={ME_QUERY}
        >
          {({ loading, error, data }) => {
            if (loading) return (
              <section className="page-section" id="results">
                <div className="container">
                  <div className="row align-items-center justify-content-center text-center">
                    <div className="col-md-12">
                      <Loader />
                    </div>
                  </div>
                </div>
              </section>
            )
            if (error) return <Alert type="danger" message={error.message} />
            return (
              <>
              <Masthead2 heading={data.me.username} image="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <section>
                <div className="container d-flex flex-column justify-content-center align-items-center">
                  <p>{data.me.email}</p>
                </div>
              </section>
              </>
            )
          }}
        </Query>
      </>
    );
  }
}

const ME_QUERY = gql`
  query {
    me {
      username
      email
    }
  }
`

export default MyAccount;
