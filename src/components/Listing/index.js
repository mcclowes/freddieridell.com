import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";

import DividedList from "../Toolbox/DividedList";
import Spacer from "../Toolbox/Spacer";
import PageTitle from "../Toolbox/PageTitle";

import Post from "./Post";

const PostHr = styled.hr(
	calm({
		display: "block",
		color: R.path(["theme", "color", "symantic", "text"]),
	}),
);

const PostDivider = () => (
	<React.Fragment>
		<Spacer height={4} />
		<PostHr />
		<Spacer height={3} />
	</React.Fragment>
);

const PostContaner = styled.nav(
	calm({
		alignSelf: "center",
		maxWidth: R.path(["theme", "size", "paragraphWidth"]),
	}),
);

const Listing = props => (
	<React.Fragment>
		<PageTitle>{props["*"]} Posts</PageTitle>
		<Spacer height={6} />
		<PostContaner>
			<DividedList
				data={props.data.allMarkdownRemark.edges}
				getKey={R.path(["node", "fields", "slug"])}
				renderItem={({ node }) => <Post {...node} />}
				renderDivider={() => <PostDivider />}
			/>
		</PostContaner>
		<Spacer height={3} />
	</React.Fragment>
);

export default Listing;
