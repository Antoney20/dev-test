import  { useState, useEffect } from "react";
import LoginForm from "../../pages/SigninForm";

const SubmitState = {
  Ready: "ready",
  Submitting: "submitting",
  Completed: "completed",
  Failed: "failed",
};

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [submitStatus, setSubmitStatus] = useState({
    state: SubmitState.Ready,
    error: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleSubmit = async () => {
      if (submitStatus.state === SubmitState.Submitting) {
        setIsLoading(true);

        const timeout = setTimeout(() => {
          setIsLoading(false);
          setSubmitStatus({
            state: SubmitState.Failed,
            error: "Network request timed out",
          });
        }, 300);

        try {
          const response = await fetch(
            "https://lobster-app-oa2rt.ondigitalocean.app/app/login/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
          clearTimeout(timeout);

          if (response.ok) {
            setSubmitStatus({ state: SubmitState.Completed, error: null });
            setIsLoading(false);
            setFormData({ username: "", password: "" });
          } else {
            console.log(response)   
            throw new Error(response.message || "Login failed");
          }
        } catch (error) {
          console.error("Error logging in:", error);
          setSubmitStatus({ state: SubmitState.Failed, error: error.message });
          setIsLoading(false);
        }
      }
    };

    handleSubmit();
  }, [submitStatus, formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    setSubmitStatus({ state: SubmitState.Submitting, error: null });
  };

  return (
    <LoginForm
      formData={formData}
      submitState={submitStatus.state}
      isLoading={isLoading}
      onSubmit={handleFormSubmit}
      onInputChange={handleInputChange}
      errorMessage={submitStatus.error}
      isSubmissionSuccessful={submitStatus.state === SubmitState.Completed}
    />
  );
};

export default Login;
