import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHSelect from "../../Components/Input/Select";
import VHInputCheckbox from "../../Components/Input/checkbox";
import VHList from "../../Components/List";
import VHSecondaryList from "../../Components/SecondaryList";
import VHTitleDescription from "../../Components/TitleDescription";


const VHSkillsSection = props => {
  const positions = props.positions
  const position = props.positionSkill != undefined ? positions[props.positionSkill - 1] : {};

  const yearsOfExperienceList = props.yearsOfExperienceList
  const yearsOfExperience = props.yearsOfExperience != undefined ? yearsOfExperienceList[props.yearsOfExperience - 1] : {};

  const workAsList = props.positions

  let userPositions = []

  if (props.userPositions) {
    props.userPositions.map(item => {
      if (item.id) {
        userPositions.push({ value: item.id, label: item.name })
      } else {
        userPositions.push({ value: item, label: positions[item].label })
      }
    })
  }


  return (
    <>
      <Row marginBottom={2}>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={"Professional Overview"}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
          <Row row justifySpaceBetween responsive>
            <Row width={'60%'} marginRight={3} id="main-role">
              <VHSelect
                preLoading={props.preLoading}
                caption="I am a/an..."
                captionColor={
                  props.controls.positionSkill.loading
                    ? "gray-40"
                    : props.controls.positionSkill.error
                      ? "red"
                      : 'gray-90'
                }
                className={`vh-skills-section-positionSkill ${props.className ? props.className : ''}`}
                currentItem={position}
                data="positionSkill"
                onEvent={props.onEvent}
                items={positions}
                isLoading={props.controls.positionSkill.loading}
                description={props.controls.positionSkill.error && props.controls.positionSkill.message}
                descriptionColor="red"
              />
            </Row>
            <Row width={'40%'} id="total-year-experience-role">
              <VHSelect
                preLoading={props.preLoading}
                caption="With..."
                captionColor={
                  props.controls.yearsOfExperience.loading
                    ? "gray-40"
                    : props.controls.yearsOfExperience.error
                      ? "red"
                      : 'gray-90'
                }
                className={`vh-skills-section-yearsOfExperience ${props.className ? props.className : ''}`}
                currentItem={yearsOfExperience}
                data="yearsOfExperience"
                onEvent={props.onEvent}
                items={yearsOfExperienceList}
                isLoading={props.controls.yearsOfExperience.loading}
                description={props.controls.yearsOfExperience.error && props.controls.yearsOfExperience.message}
                descriptionColor="red"
                placeholder="select an opition"
              />
            </Row>
          </Row>
          <Row marginBottom3 responsive id="leadership">
            <VHInputCheckbox
              checked={props.leadershipExperience}
              className=""
              color={'gray-90'}
              data={{
                checked: props.leadershipExperience,
                id: 'leadershipExperience',
                label: 'yes',
                value: '123'
              }}
              onEvent={props.onEvent}
              title="I have leadership experience"
              value="123"
              variant="platform1"
            />
          </Row>
          <Row marginBottom={5} responsive id="open-different-role">
            <VHInputCheckbox
              checked={props.openForDifferentRole}
              className=""
              color={'gray-90'}
              data={{
                checked: props.openForDifferentRole,
                id: 'openForDifferentRole',
                label: 'yes',
                value: '123'
              }}
              onEvent={props.onEvent}
              title="I am open to working in a different role"
              value="123"
              variant="platform1"

            />
          </Row>
          {props.openForDifferentRole &&
            <Row id="would-work-as">
              <VHSelect
                preLoading={props.preLoading}
                caption="I would like to work as..."
                isMulti
                captionColor={
                  props.controls.userPositions.loading
                    ? "gray-40"
                    : props.controls.userPositions.error
                      ? "red"
                      : "gray-90"
                }
                className={`vh-skills-section-userPositions ${props.className ? props.className : ''}`}
                currentItem={userPositions}
                data="userPositions"
                onEvent={props.onEvent}
                items={workAsList}
                isLoading={props.controls.userPositions.loading}
                description={props.controls.userPositions.error && props.controls.userPositions.message}
                descriptionColor="red"
              />
            </Row>
          }
          <Row column marginTop={15}>
            <VHTitleDescription
              contents={true}
              className={`vh-general-section-topSkill-description ${props.className ? props.className : ''}`}
              onEvent={props.onEvent}
              title="Rank your top 3 skills"
              titleColor={
                props.controls.topSkill.loading
                  ? "gray-40"
                  : props.controls.topSkill.error
                    ? "red"
                    : "gray-100"
              }
              titleVariant="subtitle1"
              description="1st = Highest proficiency level; 3rd = Lowest proficiency level"
              descriptionColor={
                props.controls.topSkill.loading
                  ? "gray-40"
                  : props.controls.topSkill.error
                    ? "red"
                    : "gray-50"
              }
            />
          </Row>
          <Row marginTop={8} marginBottom={16} id="top-skills-group">
            <VHList
              controls={props.controls}
              onEvent={props.onEvent}
              secondList={props.yearsOfExperienceList}
              list={props.skillList}
              items={props.topSkill}
              data="vanhack" />
          </Row>
          <Row column marginBottom={5} >
            <VHTitleDescription
              contents={true}
              className={`vh-general-section-topSkill-description ${props.className ? props.className : ''}`}
              onEvent={props.onEvent}
              title="Add 5 secondary skills"
              titleColor={
                props.controls.secondarySkill.loading
                  ? "gray-40"
                  : props.controls.secondarySkill.error
                    ? "red"
                    : "gray-100"
              }
              titleVariant="subtitle1"
            />
          </Row>
          <Row id="secondary-skills-group">
            <VHSecondaryList
              controls={props.controls}
              onEvent={props.onEvent}
              secondList={props.yearsOfExperienceList}
              list={props.skillList}
              items={props.secondarySkill}
              data="vanhack" />
          </Row>
        </VHCardBase>
      </Row>
    </>
  )
}

VHSkillsSection.propTypes = {
  onEvent: PropTypes.func,
  title: PropTypes.string.isRequired,
  data: PropTypes.object,
  className: PropTypes.string
}

export default VHSkillsSection;
