import styled from "styled-components";

const Container = styled.div``;
const Heading = styled.h3`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;
const ProfilePictureContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;
const ProfilePicture = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.grey};
`;
const Upload = styled.button`
  align-self: end;
`;
const Delete = styled.button`
  align-self: end;
`;
const NameContainer = styled.div`
  display: flex;
`;
const NameContainerLeft = styled.div``;
const Label = styled.div``;
const FirstNameInput = styled.input``;
const NameContainerRight = styled.div``;
const LastNameInput = styled.input``;
const EmailContainer = styled.div``;
const EmailInput = styled.input``;
const MobileNumberContainer = styled.div``;
const MobileInputContainer = styled.div``;
const MobileCountryInput = styled.input`
  width: 5%;
`;
const MobileNumberInput = styled.input``;
const DateOfBirthContainer = styled.div``;
const DateOfBirthInput = styled.input``;
const PasswordContainer = styled.div``;
const PasswordContainerHeading = styled.h3`
  padding-bottom: 0.75rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
`;
const CurrentPasswordContainer = styled.div``;
const CurrentPasswordInput = styled.input``;
const NewPasswordContainer = styled.div``;
const NewPasswordInput = styled.input``;
const ConfirmPasswordContainer = styled.div``;
const ConfirmPasswordInput = styled.input``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const SaveChanges = styled.button``;

const PersonalDetails = () => {
  return (
    <Container>
      <Heading>Personal Information</Heading>
      <ProfilePictureContainer>
        <ProfilePicture></ProfilePicture>
        <Upload>Upload</Upload>
        <Delete>Delete</Delete>
      </ProfilePictureContainer>
      <NameContainer>
        <NameContainerLeft>
          <Label>First Name</Label>
          <FirstNameInput></FirstNameInput>
        </NameContainerLeft>
        <NameContainerRight>
          <Label>Last Name</Label>
          <LastNameInput></LastNameInput>
        </NameContainerRight>
      </NameContainer>
      <EmailContainer>
        <Label>Email</Label>
        <EmailInput></EmailInput>
      </EmailContainer>
      <MobileNumberContainer>
        <Label>Mobile</Label>
        <MobileInputContainer>
          <MobileCountryInput></MobileCountryInput>
          <MobileNumberInput></MobileNumberInput>
        </MobileInputContainer>
      </MobileNumberContainer>
      <DateOfBirthContainer>
        <Label>Date Of Birth</Label>
        <DateOfBirthInput></DateOfBirthInput>
      </DateOfBirthContainer>
      <PasswordContainer>
        <PasswordContainerHeading>Change Password</PasswordContainerHeading>
        <CurrentPasswordContainer>
          <Label>Current Password</Label>
          <CurrentPasswordInput></CurrentPasswordInput>
        </CurrentPasswordContainer>
        <NewPasswordContainer>
          <Label>New Password</Label>
          <NewPasswordInput></NewPasswordInput>
        </NewPasswordContainer>
        <ConfirmPasswordContainer>
          <Label>Confirm Password</Label>
          <ConfirmPasswordInput></ConfirmPasswordInput>
        </ConfirmPasswordContainer>
      </PasswordContainer>
      <ButtonContainer>
        <SaveChanges>Save Changes</SaveChanges>
      </ButtonContainer>
    </Container>
  );
};

export default PersonalDetails;
