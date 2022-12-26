import {
  Home,
  CreatePortfolio,
  Template1Content,
  Template2Content,
  Template3Content,
  Template4Content,
  Template5Content,
} from "~/Components";
import { DefaultItemInGridTemplate1 } from "~/Routes/ComponentDefault/ComponentDefaults1";
import { DefaultItemInGridTemplate2 } from "~/Routes/ComponentDefault/ComponentDefaults2";
import { DefaultItemInGridTemplate3 } from "~/Routes/ComponentDefault/ComponentDefaults3";
import { DefaultItemInGridTemplate4 } from "~/Routes/ComponentDefault/ComponentDefaults4";
import { DefaultItemInGridTemplate5 } from "~/Routes/ComponentDefault/ComponentDefaults5";

export const publicRoutes = [
  {
    element: <Home />,
    path: "/",
  },

  {
    element: (
      <CreatePortfolio
        DefaultComponent={DefaultItemInGridTemplate1}
        id='template-1'
      >
        <Template1Content />
      </CreatePortfolio>
    ),
    path: "/template1",
  },
  {
    element: (
      <CreatePortfolio
        id='template-2'
        DefaultComponent={DefaultItemInGridTemplate2}
      >
        <Template2Content />
      </CreatePortfolio>
    ),
    path: "/template2",
  },
  {
    element: (
      <CreatePortfolio
        id='template-3'
        DefaultComponent={DefaultItemInGridTemplate3}
      >
        <Template3Content />
      </CreatePortfolio>
    ),
    path: "/template3",
  },
  {
    element: (
      <CreatePortfolio
        id='template-4'
        DefaultComponent={DefaultItemInGridTemplate4}
      >
        <Template4Content />
      </CreatePortfolio>
    ),
    path: "/template4",
  },
  {
    element: (
      <CreatePortfolio
        id='template-5'
        DefaultComponent={DefaultItemInGridTemplate5}
      >
        <Template5Content />
      </CreatePortfolio>
    ),
    path: "/template5",
  },
];
