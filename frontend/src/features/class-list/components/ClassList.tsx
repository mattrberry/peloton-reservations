import styled from "styled-components";
import { selectHasFilters } from "../../filters/selectors/selectHasFilters";
import { useAppSelector } from "../../store/hooks/useStore";
import { Card } from "../../theme/components/Card";
import { selectFilteredClassesGroups } from "../selectors/selectFilteredClassesGroups";
import { Class } from "../types/Class";
import { ClassListItem } from "./ClassListItem";

const Wrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const GroupWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const GroupTitle = styled.div`
  padding: 8px;
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
`;

const GroupTitleText = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  color: ${(props) => props.theme.colors.main};
`;

const TimeZoneTipText = styled.i`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const TipText = styled.i`
  margin-top: 4px;
  font-size: 12px;
`;

interface Props {
  classes: Class[];
}

export const ClassList = ({ classes }: Props) => {
  const filteredGroups = useAppSelector((state) =>
    selectFilteredClassesGroups(state, classes)
  );
  const hasFilters = useAppSelector(selectHasFilters);
  const isFreeSelected = useAppSelector(
    (state) => state.filters.showBookableStatus === "free"
  );

  if (filteredGroups.length === 0) {
    return (
      <Card>
        <p>No classes!</p>
        {hasFilters && (
          <TipText>
            Tip: Try resetting your filters or selecting more options in the
            sidebar.
          </TipText>
        )}
        {isFreeSelected && !hasFilters && (
          <TipText>
            Tip: Try checking back exactly at 12:00 pm on Mondays and Thursdays.
            This is usually when new classes open up.
          </TipText>
        )}
      </Card>
    );
  }

  return (
    <Wrapper>
      {filteredGroups.map((group, index) => {
        return (
          <GroupWrapper key={index}>
            <GroupTitle>
              <GroupTitleText>{group.formattedDate}</GroupTitleText>
              {index === 0 && (
                <TimeZoneTipText>All times in studio timezone</TimeZoneTipText>
              )}
            </GroupTitle>
            {group.classes.map((clazz, index) => {
              return <ClassListItem key={index} clazz={clazz} />;
            })}
          </GroupWrapper>
        );
      })}
    </Wrapper>
  );
};
