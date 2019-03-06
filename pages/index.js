import Head from 'next/head';
import styled from 'styled-components';

const Cover = styled.section`
  background-image: url('../static/images/cover4.jpg');
  background-size: cover;
  height: 950px;
  width: 100%;
`;

const List = styled.li`
a {
  color: white;
}
`;

const Logo = styled.div`
  background-image: url('../static/images/finallogo.png');
  background-size: contain;
  height: 150px;
  width: 150px;
  background-repeat: no-repeat;
  margin-left:100px;
`;

const Space = styled.div`
  height: 250px;
  width: 100%;
`;

const Text = styled.p`
  color: white;
`;

const SubText = styled.p`
  color: white
`;

const Button = styled.button`
  font-weight: bold;
`;

const Base = styled.div`
  margin-left: 200px;
  margin-top: 100px;
`;

const BigPara = styled.p`
  color: black;
  font-weight: bold;
  font-size: 60px;
`;

const Change = styled.span`
  color: #5bc0de ;
`;

const Para = styled.div`
  color:grey;
  margin-left: 50px;
`;

const Header = styled.p`
  color: black;
  font-size: 70px;
`;

const SpaceMore = styled.div`
  height: 100px;
  width: 100%;
`;

const Back = styled.div`
  background-color: whitesmoke;
`;

const Line = styled.div`
  background-color: black;
  height: 1px;
  width: 50%;
`;

const Highlight = styled.a`
  text-decoration: underline;
`;

const Picture = styled.div`
  background-image: url('../static/images/graph.png');
  height: 570px;
  width: 570px;
  margin-left: 200px;
  background-size: cover;
`;

const Heading = styled.p`
  color: black;
`;

const BaseTwo = styled.div`
  margin-left: 200px;
  margin-top: 100px;
`;

const Company = styled.i`
  font-size: 110px;
  color: #5bc0de;
`;

const Form = styled.div`
  height: 100%;
  width: 100%;
  border-style: double;
  border-color:  #5bc0de;  
  border-radius: 10px;
  border-width: 5px;
  padding: 50px;
`;

const Patch = styled.div`
  background-image: url('../static/images/background.svg');
  background-size:cover;
`;

const ListTwo = styled.li`
a {
  color: blue;
}
`;

const LineTwo = styled.div`
  height: 100px;
  width: 100%;
  border-style: solid;
  border-color:  #5bc0de;
  border-width: 5px;
`;

export default () => (
  <div>

    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
    </Head>

    <Cover className="section">
      <div className="columns is-vcentered">
        <Logo className="column is-two-third">
        </Logo>
        <nav className="breadcrumb has-dot-separator column is-pulled right" aria-label="breadcrumbs">
          <ul>
            <List className="is-size-4"><a href="#">Book</a></List>
            <List className="is-size-4"><a href="#">How it Works</a></List>
            <List className="is-size-4"><a href="#">Manage</a></List>
            <List className="is-size-4"><a href="#">Contact Us</a></List>
          </ul>
        </nav>
      </div>

      <div className="columns">
        <Space className="column is-full"></Space>
      </div>


      <div className="columns">
        <div className="column is-half"></div>
        <Text className="column has-text-weight-bold is-size-1 has-text-white is-pulled-right has-text-centered">
          Mobile Services
      </Text>
      </div>
      <div class="columns">
        <div className="column is-three-fifths"></div>
        <SubText className="column is-two-fifths is-size-3 has-text-white is-pulled-right">
          Easy plan and manage your flights with the new mobile app. Enjoy your seamless service from booking to boarding.
      </SubText>
      </div>

      <div className="columns">
        <div className="column is-three-fifths"></div>
        <div className="column is-one-third">
          <Button className="button is-large has-text-info is-centered">Get Started</Button>
        </div>
      </div>

    </Cover>

    <div className="section">
      <Base className="columns">
        <div className="column is-two-fifths">
          <BigPara>Use the application to <Change>Build Routes.</Change>
            <p><Button className="button is-large has-text-light is-centered has-background-info">Learn More</Button></p>
          </BigPara>
        </div>
        <Para className="column is-two-fifths is-size-4">If subscribed to a Plus Account, when you click "Send to clients", simply choose the option to send your customers an email with a download link for the application for Android or iOS. <br /> <br />
          It's free for your client to download the application. And once installed, they'll have offline access to their  beautiful and proffesional itinerary right from the phone. And don't worry- any changes you make to their trip update automatically.
        </Para>
      </Base>
    </div>

    <div className="columns">
      <SpaceMore className="column is-full"></SpaceMore>
    </div>

    <Back className="section">
      <div className="columns">
        <div className="column is-full">
          <Header className="has-text-weight-bold has-text-centered">How It Works?<br /></Header>
        </div>
      </div>

      <div className="columns">

        <div className="columnis-4">
          <p className=" is-size-1 has-text-weight-bold">01</p><br />
          <p className="is-size-1">Plan Your Trip</p><br />
          <Line></Line><br /><br />
          <p className="is-size-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit enim, in laoreet mi faucibus vel.</p><br />
          <Highlight className="has-text-link is-size-5">More info</Highlight>
        </div>

        <div className="column is-4 ">
          <p className=" is-size-1 has-text-weight-bold">02</p><br />
          <p className="is-size-1">Flexible Search</p><br />
          <Line></Line><br /><br />
          <p className="is-size-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit enim, in laoreet mi faucibus vel.</p><br />
          <Highlight className="has-text-link is-size-5">More info</Highlight>
        </div>

        <div className="column is-4">
          <p className=" is-size-1 has-text-weight-bold">03</p><br />
          <p className="is-size-1">Find Trip Info</p><br />
          <Line></Line><br /><br />
          <p className="is-size-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit enim, in laoreet mi faucibus vel.</p><br />
          <Highlight className="has-text-link is-size-5">More info</Highlight>
        </div>
      </div>
    </Back>

    <div className="columns">
      <SpaceMore className="column is-full"></SpaceMore>
    </div>

    <div className="section">
      <div className="columns is-vcentered">

        <BaseTwo className="column is-two-fifths">
          <Heading className="is-size-1 has-text-weight-bold">Simple Itenerary Delivery<br /> <br /></Heading>
          <p className="is-size-4 has-text-color-grey">In nec turpis pretium, porttitor odio ut, finibus mauris. Nam at magna tellus. Maecenas facilisis eget felis sit amet bibendum. Proin eu erat sit amet nisl faucibus pretium at vel elit. Cras imperdiet pharetra dignissim. <br /> <br /> </p>
          <p className="is-size-4 has-text-color-grey">Nunc placerat sollicitudin est, ac tincidunt elit auctor quis.Sed convallis, erat malesuada egestas sodales, lacus lacus rhoncus metus, quis pretium erat tortor id ipsum. <br /> <br /> </p>
          <p><Button className="button is-large has-text-light is-centered has-background-info">Learn More<br /><br /></Button></p>
        </BaseTwo>

        <div className="column is-three-fifths">
          <Picture></Picture>
        </div>
      </div>
    </div>

    <div className="columns">
      <SpaceMore className="column is-full"></SpaceMore>
    </div>

    <div className="section">
      <div className="columns">
        <div className="column is-full">
          <Header className="has-text-weight-bold has-text-centered">Our Services<br /></Header>
        </div>
      </div>


      <div className="columns">
        <div className=" column is-one-third is-offset-2">
          <p className="is-size-2 has-text-weight-bold">
            <i className="fa fa-spinner has-text-info"></i> &nbsp;
            Auto Update</p><br /><br />
          <p className="is-size-4 has-color-black">New venues are being added automatically,<br /> making the guides the most upto-date on the market.</p>
        </div>

        <div className=" column is-one-third is-offset-1">
          <p className="is-size-2 has-text-weight-bold">
            <i className="fa fa-search has-text-info"></i> &nbsp;
            Search Functionality</p><br /><br />
          <p className="is-size-4 has-color-black">You can look for specific tags,<br /> names of location and places.</p>
        </div>
      </div>

      <div className="columns">
        <SpaceMore className="column is-full"></SpaceMore>
      </div>

      <div className="columns">
        <div className=" column is-one-third is-offset-2">
          <p className="is-size-2 has-text-weight-bold">
            <i className="fa fa-signal has-text-info"></i> &nbsp;
            Trendins Filter</p><br /><br />
          <p className="is-size-4 has-color-black">You can see the places that are particularly trendy<br /> at the time of search</p>
        </div>

        <div className=" column is-one-third is-offset-1">
          <p className="is-size-2 has-text-weight-bold">
            <i className="fa fa-cloud has-text-info"></i> &nbsp;
            Essentials</p><br /><br />
          <p className="is-size-4 has-color-black">Verified information including addresses, opening<br /> hours, contacts and recommendations.</p>
        </div>
      </div>

    </div>

    <div className="columns">
      <SpaceMore className="column is-full"></SpaceMore>
    </div>

    <div className="section">

      <div className="columns">
        <div className="column is-full">
          <Header className="has-text-weight-bold has-text-centered">Partners and Clients <br /></Header>
        </div>
      </div>

      <div className="columns">

        <div className="column is-one-fifth has-text-centered">
          <p>
            <Company className="fab fa-ebay"></Company>
          </p>
        </div>

        <div className="column is-one-fifth has-text-centered">
          <p>
            <Company className="fab fa-facebook-square"></Company>
          </p>
        </div>

        <div className="column is-one-fifth has-text-centered">
          <p>
            <Company className="fab fa-amazon"></Company>
          </p>
        </div>

        <div className="column is-one-fifth has-text-centered">
          <p>
            <Company className="fab fa-cc-paypal"></Company>
          </p>
        </div>

        <div className="column is-one-fifth has-text-centered">
          <p>
            <Company className="fab fa-cc-visa"></Company>
          </p>
        </div>

      </div>
    </div>

    <div className="columns">
      <SpaceMore className="column is-full"></SpaceMore>
    </div>

    <div className="section">
      <div className="columns is-vcentered">
        <div className="column is-two-fifths">
          <p className="has-text-weight-bold has-text-centered is-size-1 has-text-black">Get In Touch</p>
          <p className="has-text-centered is-size-3 has-text-grey">Do You have a question?</p>
        </div>

        <div className="column is-two-fifths">
          <Form>

            <div className="field">
              <label className="label is-size-4">Full Name</label>
              <div className="control">
                <input className="input is-info" type="text" placeholder="Enter Your Full Name" />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input is-info" type="email" placeholder="e.g. alexsmith@gmail.com" />
              </div>
            </div>

            <div className="field">
              <label className="label is-size-4">Message</label>
              <div className="control">
                <textarea className="textarea is-info" placeholder="Enter Your Message"></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button className="button is-text">Cancel</button>
              </div>
            </div>

          </Form>
        </div>
      </div>
    </div>

    <div className="columns">
      <SpaceMore className="column is-full"></SpaceMore>
    </div>


    <div className="section">
      <Patch className="columns is-vcentered">

        <div className="column is-one-fifth">
          <Logo></Logo>
        </div>
        <div className="column is-two-fifths"></div>
        <div className="column is-half has-text-centered">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <ListTwo className="is-size-4"><a href="#">Book</a></ListTwo>
              <ListTwo className="is-size-4"><a href="#">How It Works</a></ListTwo>
              <ListTwo className="is-size-4"><a href="#">Manage</a></ListTwo>
              <ListTwo className="is-size-4"><a href="#">Contact Us</a></ListTwo>
            </ul>
          </nav>
        </div>

        <div className="columns">
          <div className="column is-full">
            <LineTwo></LineTwo>
          </div>
        </div>

      </Patch>




    </div>

  </div>
)
